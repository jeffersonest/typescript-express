
import { Request, Response } from 'express'

class MainController {
    public async status (req: Request, res: Response): Promise<Response> {
      return res.json({"status" : "ONLINE"})
    }

  }
  
  export default new MainController()