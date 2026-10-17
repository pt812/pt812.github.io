#include <iostream>


int main() {
   // stack memory
   int stackNum = 10;

   // heap memory
   int* heapNum = new int(20);

   std::cout << *heapNum << std::endl;

   delete heapNum;
   heapNum = nullptr;

   // accesses data that doesn't exist
   std::cout << *heapNum << std::endl;
}
