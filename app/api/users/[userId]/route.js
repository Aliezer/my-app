import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const { userId } = await params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = res.data;
        const formattedJson = JSON.stringify(data, null, 2);
        return new NextResponse(formattedJson, {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        return NextResponse.json({ error: "Error" }, { status: 500 });
    }
}
