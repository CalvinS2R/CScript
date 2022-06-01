#include <iostream>
#include <malloc.h>

int main() {
  malloc(1000);
  int nodeJsIsInstalled;
  if(nodeJsIsInstalled == true) {
   std::cout << "All requirements met" << std::endl;
  } else {
    std::cout << "RuntimeError: Node.js is not installed, failing.. [100/100%]" << std::endl;
  }
}
