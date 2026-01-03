import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface WhatsAppButtonProps {
    phoneNumber: string;
    message?: string;
}

export default function WhatsAppButton({ phoneNumber, message = 'Olá! Gostaria de solicitar um orçamento.' }: WhatsAppButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 animate-float group"
            aria-label="Contato via WhatsApp"
        >
            <MessageCircle size={32} className="transition-transform group-hover:rotate-12" />

            {isHovered && (
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl">
                    Fale conosco!
                </span>
            )}
        </button>
    );
}
