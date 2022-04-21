#include <stdio.h>
#include <stdlib.h>

typedef struct
{
    unsigned char d;
    unsigned char m;
    short a;
    //1+1+4 = 6 pero ordena por 4 bytes => 8
}tFecha;

//tFecha armarFecha();
//void mostrarFecha();

tFecha* armarFecha(tFecha *p) //función
{
    tFecha f;
    p->d=30;
    p->m=8;
    p->a=2021;
    return p;
}

void mostrarFecha(const tFecha *p)
{
    printf("%02d - %02d - %04d \n",p->d,p->m,p->a); //-> flecha
}

int main()
{
    tFecha *p;
    tFecha f;
    p=&f;
    armarFecha(p);
    mostrarFecha(p);

    return 0;
}

