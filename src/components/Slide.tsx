import {useState , useEffect , useRef} from "react"
import {motion} from "framer-motion"

import "../styles/components/slide.sass"

import img1 from "../../public/img1.png"
import img2 from "../../public/img2.png"
import img3 from "../../public/img3.png"
import img4 from "../../public/img4.png"

const imgs = [img1 ,img2 , img3, img4 ]

const Slide = () =>{
    const carrousel = useRef<null | HTMLDivElement>(null);
    const [width, setWidth] = useState(0)

    useEffect(()=>{

      setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth)
    })
    
    return (
      <section className="app">
        <motion.div ref={carrousel} className="carousel">
          <motion.div drag="x" className="inner" dragConstraints={{right: 0 , left: -width}}>
              {imgs.map(image => (
                  <motion.div className="item" key={image}>
                    <img src={image} alt={image}/>
                  </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </section>
    )
}
// 563492ad6f91700001000001e5c4e950f5a7406bb6bb9b75804ca16d
export default Slide;