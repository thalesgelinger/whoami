import { useEffect, useRef } from "react"

import { RealtimeChannel, RealtimeChannelSendResponse } from "@supabase/supabase-js";
import { supabase } from "../services/supabase";
import { v4 as uuid4 } from "uuid"

type UseRealTime = <T = any>(payload: T) => Promise<RealtimeChannelSendResponse | undefined>

const id = uuid4()

export const useRealTime = <Payload = any>(room: string, receiver: (payload: Payload & { id: string }) => void): UseRealTime => {

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
                ({ payload }) => {
                    receiver(payload)
                }
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
