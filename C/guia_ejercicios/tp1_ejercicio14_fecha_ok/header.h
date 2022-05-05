#ifndef header.h
#define header.h
#include <math.h>
#include <stdio.h>
#include <stdlib.h>

typedef struct
{
    int d,
        m,
        a
} t_fecha;

void validar_fecha(t_fecha dia);

#endif
