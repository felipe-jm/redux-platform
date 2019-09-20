import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion';

import { Container } from './styles';

import api from '../../services/api';

export default function Nav() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    async function loadModules() {
      const response = await api.get('/modules');

      setModules(response.data);
    }

    loadModules();
  }, []);

  return (
    <Container>
      <Accordion className="accordion" allowMultipleExpanded={false}>
        {modules.map(module => (
          <AccordionItem className="accordion-item">
            <AccordionItemHeading
              key={module.id}
              className="accordion-item-heading"
            >
              <AccordionItemButton>{module.title}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="accordion-item-panel">
              <ul>
                {module.lessons.map(lesson => (
                  <li>{lesson.title}</li>
                ))}
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
