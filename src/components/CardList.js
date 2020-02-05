import React from 'react';
import Card from './Card';

function CardList({ robots }) {
    // Testing ErrorBoundry

    /*if(true) {
        throw new Error("Fuck fuck fuck fuck!!!");
    }*/
    
    return(
        <div>
            {
                robots.map((robot, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email} 
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;