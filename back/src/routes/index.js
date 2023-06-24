const trainersRoutes = require("./trainers.routes");
const clientsRoutes = require("./clients.routes");
const eventsRoutes = require("./events.routes");
const contactsRoutes = require("./contacts.routes");
const learnersFreeRoutes = require("./learners_free.routes");
const authRoute = require("./auth.routes");
const adminsRoutes = require("./admins.routes");
const coursesRoutes = require("./posts.routes");
const commentsRoutes = require("./comments.routes");
const filtersRoutes = require("./filters.routes");
const teachersRoutes = require("./teachers.routes");

module.exports = [
  trainersRoutes,
  clientsRoutes,
  eventsRoutes,
  contactsRoutes,
  learnersFreeRoutes,
  authRoute,
  adminsRoutes,
  coursesRoutes,
  commentsRoutes,
  filtersRoutes,
  teachersRoutes
];
