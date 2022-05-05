#include "header.h"

void validar_fecha(t_fecha dia)
{

    /*if(dia.a >1900 && dia.a<3000)
    {
        printf("A%co valido\n",164);
    }

    if(dia.m>0 && dia.m<13)
    {
        printf("Mes valido\n");
    }*/

    if(dia.d == 31)
    {
        switch(dia.m)
        {
        case 1:
            printf("Dia y mes valido");
            break;
        case 3:
            printf("Dia y mes valido");
            break;
        case 5:
            printf("Dia y mes valido");
            break;
        case 7:
            printf("Dia y mes valido");
            break;
        case 8:
            printf("Dia y mes valido");
            break;
        case 10:
            printf("Dia y mes valido");
            break;
        case 12:
            printf("Dia y mes valido");
            break;
        }

    }
    else if(dia.d == 30)
    {
        switch(dia.m)
        {
            case 4:printf("Dia y mes valido");break;
            case 6:printf("Dia y mes valido");break;
            case 9:printf("Dia y mes valido");break;
            case 11:printf("Dia y mes valido");break;
        }
    }
    else if()

}
