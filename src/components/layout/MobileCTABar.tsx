import { Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background border-t border-border shadow-lg">
      <div className="flex items-center justify-between gap-2 p-3">
        <a href={BUSINESS_INFO.contact.phoneHref} className="flex-1">
          <Button variant="outline" className="w-full gap-2">
            <Phone className="h-4 w-4" />
            Call Now
          </Button>
        </a>
        <Link to="/booking" className="flex-1">
          <Button variant="cta" className="w-full gap-2">
            <Calendar className="h-4 w-4" />
            Book
          </Button>
        </Link>
      </div>
    </div>
  );
}
