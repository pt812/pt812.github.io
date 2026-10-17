#include <iostream>


int main() {
    int number = 42;

    std::cout << "value of number: " << number << std::endl;
    std::cout << "address of number: " << &number << std::endl;

    int *ptr = &number;

    // number++;
    (*ptr)++;
    std::cout << "value of number: " << number << std::endl;

    return 0;
}
