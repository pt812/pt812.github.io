#include <iostream>

int main() {

    int age;
    std::cout << "Enter your age: ";
    std::cin >> age;

    if (age >= 18) {
        std::cout << "You are eligible to vote" << std::endl;
    }
    else if (age >= 13) {
        std::cout << "You are going to be eligible very soon" << std::endl;
    }
    else {
        std::cout << "You are too young to vote!" << std::endl;
    }

    return 0;

}
