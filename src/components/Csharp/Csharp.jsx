import { useEffect, useState } from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';
import './Csharp.scss';
import { Csharpx } from '../../data';

function Csharp() {
    const [selected, setSelected] = useState('Csharp');
    const [data, setData] = useState([]);

    const list = [
        { id: 'Csharp', title: '.Net Projects' },
       

    ];

    useEffect(() => {
        switch (selected) {
            case 'Csharp': setData(Csharpx); break;
            default: setData(Csharpx);
        }
    }, [selected]);

    return (
        <section className="portfolio" id="portfolio">
            <h2 className='section-title'>Csharp Projects</h2>
            <ul className="portfolio__list">
                {list.map(item => (
                    <PortfolioList
                        key={item.id}
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>

            <div className="portfolio__container">
                {data.map(d => (
                    <a key={d.id} href={d.url}
                        className="portfolio__item"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View project: ${d.title}`}>
                        <img src={d.img} alt={d.title} loading="lazy" />
                        <span className={`badge badge--${d.level.toLowerCase()}`}>
                            {d.level}
                        </span>
                        <h3>{d.title}</h3>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Csharp;
