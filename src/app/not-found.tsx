import { Button } from "@/components";
import { ArrowTilted } from "@/components";
import NotFoundImage from "@/assets/404.png"
import Image from 'next/image';
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center gap-2 text-primary px-4 md:px-16 py-32">
            <div className="relative w-56 h-56 md:w-96 md:h-96">
                <Image src={NotFoundImage} alt="Not Found" layout="fill" objectFit="contain" />
            </div>

            {/* Button for Navigation */}
            <Link href={"/"}>
                <Button variant="primary" icon={<ArrowTilted />} iconPosition="right">
                    Go Back to Home
                </Button>
            </Link>
        </div>
    );
}
