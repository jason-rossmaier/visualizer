'''
The :mod:`ui` module contains the various Widget classes which are constructed from Primitives and provide core functionality to the application.
'''

import renderer

class Window(object):
    '''
    This is a window Widget that will serve as a container for other Widgets.

    :param renderer: renderer instance which will draw the Window's primitives.
    :type renderer: :class:`renderer.Renderer`
    
    :param x: the x offset (from the left side of the screen) to draw the Window.
    :type x: float

    :param y: is the y offset (from the bottom of the screen) to draw the Window.
    :type y: float

    :param width: is the width of the Window
    :type width: float

    :param height: is the height of the Window
    :type height: float
    '''
    def __init__(self, renderer, x, y, width, height):
        self.r = renderer
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        
        #Draw window as a rectangle primitive
        self.r.Rectangle( x, y, width, height )

        #TODO add text when a text primitive is created

    def addWidget(self, widget, **kwargs):
        kwargs['x'] += self.x
        kwargs['y'] += self.y
        widget(self.r, **kwargs)


class Button(object):
    '''
    This is a button Widget that will serve as a button.

    :param renderer: renderer instance which will draw the Button's primitives.
    :type renderer: :class:`renderer.Renderer`
    
    :param x: the x offset (from the left side of the context) to draw the Button.
    :type x: float

    :param y: is the y offset (from the bottom of the context) to draw the Button.
    :type y: float

    :param width: is the width of the Window
    :type width: float

    :param height: is the height of the Window
    :type height: float

    :param text: text displayed by the button. Defaults to empty string.
    :type text: string

    '''
    def __init__(self, renderer, x, y, width, height, color=None, text=""):
        self.r = renderer
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.text = text
        
        #Draw window as a rectangle primitive
        self.r.Rectangle(x, y, width, height, color=color)

        #TODO add text when a text primitive is created    
