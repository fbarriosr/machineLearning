from django.shortcuts import render,redirect
from django.core.exceptions import ObjectDoesNotExist
from django.views.generic import View,TemplateView,ListView,UpdateView,CreateView,DeleteView
from django.urls import reverse_lazy

nameWeb = 'DI2D'

class home(TemplateView):
    template_name = "sistemaInteligente/index.html"

    def get_context_data(self,**kwargs):
        contexto = super().get_context_data(**kwargs)
        contexto['title'] = 'Sistemas Inteligentes'
        contexto['abstract'] = '''
        Proyecto desarrollado por el DI2D de la División de Mantemiento del Ejército de Chile. Utilizando técnicas de Machine Learning para apoyar la toma de desiciones en el presupuesto.

        '''
        return contexto


class combustible(TemplateView):
    template_name = "combustible/index.html"

    def get_context_data(self,**kwargs):
        contexto = super().get_context_data(**kwargs)
        contexto['title'] = 'Combustibles'
        contexto['abstract'] = '''
        Proyecto desarrollado por el DI2D de la División de Mantemiento del Ejército de Chile. Permite estimar el gasto de combustibles a nivel nacional.
        '''
        return contexto


class mapa(TemplateView):
    template_name = "mapa/index.html"

    def get_context_data(self,**kwargs):
        contexto = super().get_context_data(**kwargs)
        contexto['title'] = 'Mapas'
        contexto['abstract'] = '''
        Proyecto desarrollado por el DI2D de la División de Mantemiento del Ejército de Chile. Permite estimar el gasto de combustibles a nivel nacional.
        '''
        return contexto
