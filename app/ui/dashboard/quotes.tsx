/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useEffect, useState } from 'react';
import { fetchRandomQuotes } from '@/app/lib/data';
import { nunito } from '@/app/ui/fonts';

interface Quote {
    _id: string;
    content: string;
    author: string;
}

const QuotesComponent = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchRandomQuotes()
            .then(setQuotes)
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        // <div>
        //     {quotes.map((quote) => (
        //         <div key={quote._id}>
        //             <p>"{quote.content}" - {quote.author}</p>
        //         </div>
        //     ))}
        // </div>
        <div className="flex w-full flex-col gap-4 lg:col-span-12">
            <h2 className={`${nunito.className} mb-4 text-xl md:text-2xl`}>
                Inspirational Quotes
            </h2>
            <div className="flex grow flex-col gap-6 justify-between rounded-xl bg-gray-50 p-4">
                {/* Use the `map` function to iterate over quotes and create a grid item for each */}
                {quotes.map((quote) => (
                    <div key={quote._id} className="flex flex-col p-4 bg-white rounded shadow">
                        <p className="text-sm md:text-base font-regular w-full">
                            "{quote.content}" - {quote.author}
                        </p>
                    </div>

                ))}
            </div>

        </div>


    );
};

export default QuotesComponent;
