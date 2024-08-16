"use client";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Hospitals() {
    const [hospitals, setHospitals] = useState<any>([]);
    useEffect(() => {
        const client = createClient();
        client
            .from("items")
            .select("*")
            .then((resp) => {
                setHospitals(resp.data);
            });
    }, []);

    return (
        <div className="flex-1 flex flex-col w-full px-8 justify-center gap-2">
            {hospitals.map((x: any) => (
                <div key={x.id}>
                    {x.name} - {x.id} - {x.description}
                </div>
            ))}
        </div>
    );
}
