import React from "react";
import "./notificacionCliente.css";
import Image2 from "./icon-profile.png";

const notifications = [
  {
    id: 1,
    avatar: Image2,
    name: "María Pérez",
    username: "@perezmaria",
    action: "le dio Me gusta a tu publicación.",
    time: "Hace 1 hora",
  },
  {
    id: 2,
    avatar: Image2,
    name: "Sofía López",
    username: "@lopezsofia",
    action: 'comentó en tu publicación: "¡Me encantó lo que compartiste!"',
    time: "Hace 2 horas",
  },
  {
    id: 3,
    avatar: Image2,
    name: "Lucía Fernández",
    username: "@luciafernandez",
    action: "le dio Me gusta a tu comentario.",
    time: "Hace 3 horas",
  },
  {
    id: 4,
    avatar: Image2,
    name: "Elena Ramírez",
    username: "@elena.ramirez",
    action: 'comentó en tu publicación: "Totalmente de acuerdo contigo!"',
    time: "Hace 4 horas",
  },
  {
    id: 5,
    avatar: Image2,
    name: "Valeria Gómez",
    username: "@val.gomez",
    action: "le dio Me gusta a tu foto.",
    time: "Hace 5 horas",
  },
  {
    id: 6,
    avatar: Image2,
    name: "Ana Martínez",
    username: "@ana.martinez",
    action:
      'comentó en tu publicación: "Gracias por compartir esta información!"',
    time: "Hace 6 horas",
  },
  {
    id: 7,
    avatar: Image2,
    name: "Carmen Torres",
    username: "@carmen.torres",
    action: "le dio Me gusta a tu artículo.",
    time: "Hace 7 horas",
  },
  {
    id: 8,
    avatar: Image2,
    name: "Daniela Rojas",
    username: "@daniela.rojas",
    action:
      'comentó en tu publicación: "Esta es una gran idea, gracias por compartir."',
    time: "Hace 8 horas",
  },
];

const NotificacionCliente = () => {
  return (
    <div className="app-container1">
      <div className="notification-center1">
        <h2>Centro de Notificaciones</h2>
        {notifications.map((notification) => (
          <div key={notification.id} className="notification1">
            <img src={notification.avatar} alt="Avatar" className="avatar" />
            <div className="notification-details">
              <p>
                <strong>
                  {notification.name} ({notification.username})
                </strong>{" "}
                {notification.action}
              </p>
              <span className="time">{notification.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificacionCliente;
