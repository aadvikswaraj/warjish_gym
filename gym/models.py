from django.db import models

class gallery(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to="gallery")

    def __str__(self):
        return self.title

class notice(models.Model):
    content = models.TextField()
    date = models.DateField()

    def __str__(self):
        return self.content