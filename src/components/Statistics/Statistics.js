import PropTypes from 'prop-types';
import s from "./Statistics.module.css"
import generateColor from "js/generateColor";


function Statistics({ title = "", stats}) {    
    let widthSection = 410;
    let widthItem = widthSection / stats.length;
    return (
        <section className={s.statistics} style={{width: widthSection}}>
            
            {title && <h2 className={s.title}>{ title}</h2>}

            <ul className={s.list} >
                {stats.map(item => {
                    return (
                        <li className={s.item} key={item.id} style={{backgroundColor: generateColor(), width: widthItem}}>
                            <span className={s.label}>{item.label}</span>
                            <span className={s.percentage}>{item.percentage}%</span>
                        </li>
                    )   
                })}                    
            </ul>

        </section>
    )
}


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
}

export default Statistics;