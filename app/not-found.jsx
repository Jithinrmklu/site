import Link from "next/link";

export default function NotFound() {
    return (
        <main className="text-center">
            <h2 className="text-3xl">Ooops something went wrong..</h2>
            <Link href="/">Back to Home</Link>
        </main>
    )
}