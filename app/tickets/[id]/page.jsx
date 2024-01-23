import Link from "next/link";
import { notFound } from "next/navigation";

async function getTickets(id) {
    const res = await fetch("http://localhost:4000/tickets/" + id, {
        next: {
            revalidate: 30
        }
    })
    if (!res.ok) {
        notFound()
    }
    return res.json()
}

export default async function TicketDetails({ params }) {
    const ticket = await getTickets(params.id);
    return (
        <main>
            <nav>
                <h2>Ticket detail</h2>
            </nav>

            <div className="card my-5">
                <h3>{ticket.title}</h3>
                <p>{ticket.body.slice(0, 200)}...</p>
            </div>
            <Link href={`/tickets`}>Back</Link>
        </main>
    )
}
