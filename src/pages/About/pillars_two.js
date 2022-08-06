import React from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

import { FaArrowDown } from "react-icons/fa"
// import '../../style/about.scss'
import  Parallax from 'react-rellax';
import { FaArrowLeft } from "react-icons/fa";
import "../../pages/About/pillarsTwo.scss"
import { MdPadding } from 'react-icons/md';
export default function pillarsTwo() {
    return ( <>
    <div class="section popup fontPrince backImage_pillars" id="pillars">
        <div className='' style={{
            // backgroundColor:'blue' ,
            }}> 
    <div className='pillar_header_section'>
        <div className='pillar_head'>Four pillars</div>
            <div className='pillar_Lines'  style={{
                // backgroundColor:'green' ,
                }}>
            <div className='pillar_Line'></div>
            <div className='pillar_Line'></div>
            </div>
    </div>
<div className='four_pillar_section img_size_pillar'  >
    <div className='name_positioning'>
<img src={require('../../../src/assets/imgs/pillar1.jpg')} alt="Connect Media Networks Vision"/>
<div className='name_position'>
<img src={require('../../pages/About/Images_for_pillars_two/gitignore.png')}  alt="Core Values of Connect Media Networks"/>
</div>
</div>
<div className='name_positioning'>
    <img src={require('../../../src/assets/imgs/pillar4.jpg')}  alt="Core Values of Connect Media Networks"/>

<div className='name_position'>
<img src={require('../../pages/About/Images_for_pillars_two/gitignore.png')}  alt="Core Values of Connect Media Networks"/>
</div>


</div>
<div className='name_positioning'>
    <img src={require('../../../src/assets/imgs/pillar3.jpg')} alt="Faith Statement of Connect Media Networks"/>
    <div className='name_position'>
<img src={require('../../pages/About/Images_for_pillars_two/gitignore.png')}  alt="Core Values of Connect Media Networks"/>
</div>
</div>

<div className='name_positioning'><img src={require('../../../src/assets/imgs/pillar2.jpg')} alt="Connect Media Networks Mission"/>
<div className='name_position'>
<img src={require('../../pages/About/Images_for_pillars_two/gitignore.png')}  alt="Core Values of Connect Media Networks"/>
</div>
</div>

</div>


    <div className='pillar_Lines_two'>
            <div className='pillar_Line'></div>
            <div className='pillar_Line'></div>
            </div>
    {/* <Col >
    <Row>
    <Col><h3  style={{fontSize:'30px',backgroundColor:'green'}}> Four pillars</h3>
    <div style={{width:"100%",height:"20px",backgroundColor:'black'}}></div>
    </Col>
    <Col xs={10}></Col>
    
    </Row>
    
    </Col> */}
    </div>
    </div>
    </>)}