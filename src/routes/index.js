import Router from 'koa-router'
import getHealth from './health/health'
import incidents from './incidents/incidents'

const router = new Router()

router.get('/health', getHealth)
router.post('/api/event/threshold/:seconds',incidents.addEvent)


export default router
