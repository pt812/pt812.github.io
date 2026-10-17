#include <iostream>

int main() {

    // declare variable as string
    std::string userName;

    // ask user for name
    std::cout << "What is your name? ";

    // take user input
    std::cin >> userName;

    // print out hello
    std::cout << "Hello, " << userName << std::endl;
    return 0;

}
