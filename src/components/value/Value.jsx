import React from 'react';
import { useState } from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion';

const Value = () => {
  return (
    <section className='v-wrapper'>
      <div className='paddings innerWidth flexCenter v-container'>
        <div className='v-left'>
          <div className='image-container'>
            <img src='./value.png' alt='' />
          </div>
        </div>
        <div className='v-right flexColStart'>
          <span className='orangeText'>Our Values</span>
          <span className='primaryText'>Value We Give to You</span>
          <span className='secondaryText'>
            We are always ready to provide you with the best hospitality
            <br />
            We believe in balance of harmony and calmness.
          </span>

          <Accordion
            className='accordian'
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordianItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className='accordionButton flexCenter'>
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName('expanded')
                            : setClassName('collapsed')
                        }
                      </AccordionItemState>
                      <div className='icon flexCenter'>{item.icon}</div>
                      <span className='primaryText'>{item.heading}</span>
                      <div className='icon flexCenter'>
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className='secondaryText'>{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
