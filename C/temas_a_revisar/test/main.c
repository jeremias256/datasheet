#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main()
{
    double num1 = 12,num2 = 5;
    double cociente = num1/num2;
    double result = fmod(num1,num2);

    printf("%.2f\n", result);
    printf("%.2f", cociente);

    return 0;
}
