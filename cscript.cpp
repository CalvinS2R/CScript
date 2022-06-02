#include <iostream>
#include <malloc.h>

#define PRINT_AM 900
#define KB 1000

//* Copyright CS Media *//
//* You may make your your own version *//

int main() {
  malloc(PRINT_AM);
  std::cout << "CScript host v1.0.0 (Windows host with Node.js)" << std::endl;
  malloc(KB);
  int nodeJsIsInstalled;
  if(nodeJsIsInstalled == true) {
   std::cout << "All requirements met" << std::endl;
  } else {
    std::cout << "RuntimeError: Node.js is not installed, failing.. [100/100%]" << std::endl;
  }
}
