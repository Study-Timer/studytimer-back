const request = require('supertest');
const app = '../../src/server.js'



describe("User", () => {

    it("should create a User", async() => {
        const response = await request(app).post("/users",{ 
            username: "userTest",
            email: "userTest@gmail.com",
            password:"testpsswd" 
        });
        console.log(response)
        expect(response.body).toHaveProperty("id"); 
        expect(response.status).toBe(201);
    });

});


describe("Subject", () => {
    
    it("should create a Subject", async() => {
        const response = await request(app).post("/:user_id/subject",{
            name: "Eng Soft",
            description:"engenharia de software",
            difficulty:"MEDIUM"
        });
        
        expect(response.body).toHaveProperty("id"); 
        expect(response.status).toBe(201);
    });

    it("should get all subjects", async() => {
        const response = await request(app).get('/1/subject')
        
        expect(response.status).toBe(200);
    });
    

    
});


describe("Activity", () => {
    
    it("should create a activity", async() => {
        const response = await request(app).post("/:user_id/:subject_id/activities",{
            "description":"descrição teste",
            "time": "20"
        });
        
        expect(response.body).toHaveProperty("id"); 
        expect(response.status).toBe(201);
    });

    
});