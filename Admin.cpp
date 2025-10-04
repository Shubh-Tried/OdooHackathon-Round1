#include <iostream>
#include <vector>

class Employee{};

class Manager{
    std::vector<Employee> Emps;
};


class Admin{
    std::string id, pass;
    public:
        Admin(){}
        Admin(std::string id, std::string pass){
            this->id = id; 
            this->pass= pass;
        }

        void AssignRoles();
        void createEmployees();
        void DefineManagerRelations();


};

class Company{
    Admin *a;
    //country of origin
    std::string CO;
    public:
    Company(std::string id, std::string pass, std::string CO){
        a = new Admin(id, pass);
        this->CO = CO;
    }

};


int main(){

}