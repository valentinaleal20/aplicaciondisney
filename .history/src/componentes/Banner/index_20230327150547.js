import './banner.css'
import { motion } from 'framer-motion'
import img from './lista.json'
const images = [{img.map(imagem =)}]
function Banner() {
    return (
        <section className='banner'>
            <img src={img} alt='img' className='banner-img' />
            <motion.section className='carrossel' />
            <motion.section className='inner' />
        </section>
    )
}
export default Banner
