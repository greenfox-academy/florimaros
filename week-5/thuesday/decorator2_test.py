import unittest
from decorator2 import Rusty

class  RustyTest((unittest.TestCase):
    def test_rusty_effect(self):
        weapon = Rusty(TestWeapon())
        self.assertEqual(5, weapon.demage())
        self.assertEqual(15)

class TestWeapon:
    def demage(self):
        return 10

class TestMace:
    def demage(self):
        return 30        

if __name__ == "__main__"
    unittest.main()
