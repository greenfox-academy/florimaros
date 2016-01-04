
import unittest
from menu import Menu

class TestMenu(unittest.TestCase):
    def test_choose(self):
        menu = Menu([
            MenuItem(1, "Test", lambda : True)
        ])
        self.assertEqual(menu, choose(1), True)

unittest.main()
