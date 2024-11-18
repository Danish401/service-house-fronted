
import { Button } from './button';
import { NotebookPen } from 'lucide-react';

import React, { useEffect, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import BookingSection from './BookingSection';

function SuggestedBusinessList({ business }) {
  const [businessList, setBusinessList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (business) {
      getBusinessList();
    }
  }, [business]);

  const getBusinessList = async () => {
    try {
      const resp = await GlobalApi.getBusinessByCategory(business.category.name);
      setBusinessList(resp?.businessLists || []);
    } catch (error) {
      console.error("Failed to fetch business list:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Optional: A loading state can be added here
  }

  return (
    <div className='md:pl-10'>
      <BookingSection business={business}>
        <Button className="flex w-full gap-2">
          <NotebookPen />
          Book Appointment  
        </Button> 
      </BookingSection>

      <div className='hidden md:block'>
        <h2 className='mt-3 mb-3 text-lg font-bold'>Similar Business</h2>
        <div>
          {businessList.length > 0 ? (
            businessList.map((item) => (
              <Link key={item.id} href={`/details/${item.id}`} className="flex gap-2 p-2 mb-4 rounded-lg cursor-pointer hover:border hover:shadow-md border-primary">
                <Image
                  src={item.images[0]?.url || '/placeholder.jpg'} // Default image or placeholder
                  alt={item.name}
                  width={80}
                  height={80}
                  className='rounded-lg object-cover h-[100px]'
                />
                <div>
                  <h2 className='font-bold'>{item.name}</h2>
                  <h2 className='text-primary'>{item.contactPerson}</h2>
                  <h2 className='text-gray-400'>{item.address}</h2>
                </div>
              </Link>
            ))
          ) : (
            <p>No similar businesses found.</p> // Handle no business case
          )}
        </div>
      </div>
    </div>
  );
}

export default SuggestedBusinessList;
