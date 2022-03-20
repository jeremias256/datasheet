#include <stdio.h>
#include <stdlib.h>
#define TAM_PAD 3
int main()
{
    int x=42;
    int y=42;
    int pad=3;

    printf(">>>%d<<<\n",x); //enteros
    printf(">>>%c<<<\n",x); //chars
    printf(">>>%x<<<\n",x); //hexa
    printf(">>>%X<<<\n",x); //hexa mayus
    printf(">>>%10X<<<\n",x);// padding:reserva 10 espacios
    printf(">>>%010X<<<\n",x);// padding:reserva 10 espacios rellenados con 0

    printf(">>>%*d<<<\n",pad,y);
    printf(">>>%*d<<<\n",TAM_PAD,y);
    printf(">>>%3.3d<<<\n",TAM_PAD,y); //para las cadenas trunca el puntito
    printf(">>>%*.*d<<<\n",3,3,y);

    return 0;
}
