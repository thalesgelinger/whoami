import { useEffect, useRef } from "react"

import { RealtimeChannel, RealtimeChannelSendResponse } from "@supabase/supabase-js";
import { supabase } from "../services/supabase";

type BroadCastPayload = {
    type: "broadcast";
    event: string;
    payload: any;
}

type UseRealTime = <T = any>(payload: T) => Promise<RealtimeChannelSendResponse | undefined>


const id = Math.random()

export const useRealTime = (room: string, receiver: (payload: BroadCastPayload) => void): UseRealTime => {

    const channel = useRef<RealtimeChannel>()

    const event = "test"

    useEffect(() => {

        channel.current = supabase.channel(room, {
            config: {
                broadcast: { self: true },
            },
        })

        channel.current
            .on(
                'broadcast',
                { event },
                receiver
            )
            .subscribe((status) => {
                if (status !== 'SUBSCRIBED') {
                    return null
                }
                console.log(`Subscribed to ${room}`)
            })

    }, [])


    const sender = async <T = any>(payload: T) => {
        return await channel.current?.send({
            type: 'broadcast',
            event,
            payload: { id, ...payload },
        })
    }

    return sender
}
