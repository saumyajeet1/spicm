import React from 'react';
import Roll from 'react-reveal/Roll';

const Des = () => {
    return (
        <div className="row">
           
        <div className="col-lg-12 col-sm-12 col-md-12 description">
            <div className="circle">
            </div>
            <Roll  left cascade duration={4000}>
            <p>SPIC MACAY (Society for the Promotion of Indian Classical Music And Culture Amongst Youth) is a non-political, nationwide, voluntary movement founded in 1977 
                by Dr Kiran Seth, Professor-Emeritus at IIT-Delhi who was awarded the ‘Padma Shri’ for his contribution to the arts in 2009.
               SPICMACAY’s intention is to enrich the quality of formal education by increasing awareness about different aspects of Indian heritage 
               and inspiring the young mind to imbibe the values embedded in it. It seeks to inspire youth through experiencing the mysticism embodied
               in the rich and heterogeneous cultural tapestry of Indian and World Heritage, with a hope that the beauty, grace, values and wisdom 
               embodied in these arts will influence their way of life and thinking and inspire one to become a better human being.
               For this, the most accomplished artistes of the country render programmes of Indian classical music and dance, folk, poetry, 
               theatre, traditional paintings, crafts & yog primarily in schools and colleges.
               In 2011, SPIC MACAY was awarded the Rajiv Gandhi Sadbhavana award in recognition of its contribution to youth development.</p>
        
        </Roll>
        </div>
        </div>
    );
};

export default Des;