import React, { Component } from 'react';
import Philosopher from '../constructors/Philosopher';
import data from '../philosophers.json';
import PhilosList from './PhilosList';

export class Explore extends Component {
    render() {
        //const nietzsche = new Philosopher('Friedrich Nietzsche', 'https://upload.wikimedia.org/wikipedia/commons/2/23/Nietzsche1882.jpg', 'Live Dangerously', ['Eternal Recurrence', 'Ubermensch'], ['1844', '1900']);
        const philosopherArray = [];
        for(let person in data){
            philosopherArray.push(data[person]);
        }
        console.log(philosopherArray);
        const philosophers = philosopherArray.map((philosopher, index) => {
            return (
                <PhilosList name={philosopher.name} image={philosopher.image}
                    quote={philosopher.quote} dates={philosopher.dates} ideas={philosopher.ideas}
                    key={22 + Math.random() * index} />
            );
        });

        return (
            <div>
                explore
                <ul className="list-group">
                   {philosophers}
                </ul>
            </div>
        )
    }
}

export default Explore
