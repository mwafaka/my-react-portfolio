import { useEffect, useState } from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';
import './Work.scss';
import { Reactx, FullApp, Backend, python } from '../../data';

function Work() {
    const [selected, setSelected] = useState('ReactJs');
    const [data, setData] = useState([]);

    const list = [
        { id: 'ReactJs', title: 'React Projects' },
        { id: 'Vuejs', title: 'Vuejs Projects' },
        { id: 'Angular', title: 'Angular Projects' },

    ];

    useEffect(() => {
        switch (selected) {
            case 'ReactJs': setData(Reactx); break;
            case 'Vuejs': setData(FullApp); break;
            case 'Angular': setData(Backend); break;

            default: setData(Reactx);
        }
    }, [selected]);

    return (
        <section className="portfolio" id="portfolio">
            <h2>Javascript Projects</h2>
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

export default Work;
