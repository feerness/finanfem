import React from "react";
import "./preguntasFrecuentes.css";

const PreguntasFrecu = () => {
  return (
    <div className="container">
      <div className="titulo">
        <p>Preguntas Frecuentes</p>
      </div>
      <div className="pregunta-1">
        <p>¿Por dónde debo empezar si no sé nada sobre finanzas?</p>
        <p>
          Puedes comenzar por aprender conceptos básicos como el ahorro, la
          gestión de deudas y la importancia de un presupuesto. Nuestro sitio
          ofrece guías paso a paso para principiantes.
        </p>
      </div>
      <div className="pregunta-2">
        <p>¿Cómo puedo aprender a manejar mejor mi dinero?</p>
        <p>
          Te enseñamos cómo crear un presupuesto, entender tus ingresos y
          gastos, y planificar para el futuro. Estos son los primeros pasos para
          tomar control de tus finanzas.
        </p>
      </div>
      <div className="pregunta-3">
        <p>
          ¿Es posible aprender sobre inversiones sin ser experta en finanzas?
        </p>
        <p>
          Sí, es posible. Tenemos cursos que explican las inversiones de manera
          simple y clara, para que puedas empezar a invertir con confianza
        </p>
      </div>
      <div className="pregunta-4">
        <p>¿Cómo puedo ahorrar si mi ingreso es bajo?</p>
        <p>
          Existen estrategias que te pueden ayudar a ahorrar incluso con un
          ingreso bajo. Te enseñamos cómo reducir gastos y maximizar tus
          ahorros, sin importar tu situación económica.
        </p>
      </div>
      <div className="pregunta-5">
        <p>¿Las finanzas personales son solo para personas con mucho dinero?</p>
        <p>
          No, las finanzas personales son importantes para todas,
          independientemente de cuánto ganes. Saber administrar tu dinero te
          ayuda a alcanzar tus metas, sea cual sea tu nivel de ingresos.
        </p>
      </div>
      <div className="pregunta-6">
        <p>
          ¿Qué tan importante es entender sobre finanzas si no tengo planes de
          invertir?
        </p>
        <p>
          Entender finanzas no es solo para invertir; también te ayuda a manejar
          mejor tu dinero, evitar deudas innecesarias, y asegurar un futuro
          financiero estable.
        </p>
      </div>
    </div>
  );
};

export default PreguntasFrecu;
