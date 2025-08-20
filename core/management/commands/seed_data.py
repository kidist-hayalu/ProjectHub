from django.core.management.base import BaseCommand
from core.factories.user_factory import UserFactory
from core.factories.team_factory import TeamFactory
from core.factories.project_factory import ProjectFactory

class Command(BaseCommand):
    help = 'Seed the data with dummy data'

    def handle(self, *args, **kwargs):
        self.stdout.write(self.style.WARNING('Seeding database...'))

        for _ in range(5):
            ProjectFactory()

        self.stdout.write(self.style.SUCCESS('Successfully seeded the database!'))