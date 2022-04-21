#include "header.h"

int funcion_cociente(int num1, int num2)
{
    int i,cociente;
    double resto;

    cociente=num1/num2;
    resto=fmod(double num1, double num2);

    return cociente,resto;
}
