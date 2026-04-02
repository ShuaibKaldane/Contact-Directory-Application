import Link from "next/link";
import LogOutButton from "./LogOutButton";

export default function Navbar() {
    const session = true; // Replace with actual session check
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">Contact App</Link>  
        <div>
           {session ? (
            <>
                <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                Contacts
                </Link>
                <LogOutButton />
            </>
            ) : (
                <>
                <Link href="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
                <Link href="/register" className="text-gray-600 hover:text-gray-800">Register</Link>
                </>
            )}
        </div>
        </div>
    </nav>
    );
}