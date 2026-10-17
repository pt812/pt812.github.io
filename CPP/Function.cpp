#include <iostream>

int addNumbers(int x, int y);

void greet(std::string name);

int main() {

    int a = 10;
    int b = 5;
    int sum = addNumbers(a, b);

    std::cout << sum << std::endl;

    greet("Pete");

    return 0;
}

int addNumbers(int x, int y) {
    return x + y;
}

void greet(std::string name) {
    std::cout << "Hello, " << name << std::endl;
}
