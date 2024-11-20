"use client"
import React, { useEffect, useState } from 'react'

const Insight = ({ insight }) => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        // Fetch the HTML file when the component mounts

        const fetchHtmlFile = async (insight) => {
            const filePath = `/${(insight.category).toLowerCase().replaceAll(' ', '')}/${insight.path}.html`
console.log(filePath);



            const response = await fetch(filePath);
            const html = await response.text();

            setHtmlContent(html); // Save the HTML content to state   
        };
        fetchHtmlFile(insight);
    }, []);
    return (
        <div className="" style={{ textAlign: 'left', padding: '0 3% 0 3%', margin: 0 }} dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    )
}

export default Insight