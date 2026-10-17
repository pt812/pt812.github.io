#include <iostream>


int main() {
   int scores[3] = {10, 20, 30};

   int* ptr = scores;

   for (int i = 0; i < 3; i++) {
        std::cout << *(ptr+i) << std::endl;
   }

   return 0;
}
