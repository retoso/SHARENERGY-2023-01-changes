import mongoose from "mongoose";

import config from "../config/database";

class Database {
    constructor() {   
        mongoose.set('strictQuery', false)    
        
        this.connection = mongoose.connect(
            config.url,
            {                
              useUnifiedTopology: true
            }
        );
    }
}

export default new Database();