import { Carousel as Carousell } from "@material-tailwind/react";

export default function Carousel() {
    return (
        <div className="s1:h-40 s2:h-48 s3:h-56 s6:h-80">
            <Carousell className="rounded-xl justify-items-center items-center" autoplay={true} loop={true}>
                <img
                    src="https://donkey.id/_next/image?url=https%3A%2F%2Fsin1.contabostorage.com%2F0a986eb902c4469cb860e43985eb18a1%3Avocapanel%2Fdonkey%2F2D038A4E-4DB2-4F9A-B442-6418DE9FEC03-4b24.jpeg&w=1920&q=75"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://donkey.id/_next/image?url=https%3A%2F%2Fsin1.contabostorage.com%2F0a986eb902c4469cb860e43985eb18a1%3Avocapanel%2Fdonkey%2F4CF4815E-7D9F-4370-9F2A-0C5499A9F103-b10c8.jpeg&w=1920&q=75"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousell>
        </div>
    );
}