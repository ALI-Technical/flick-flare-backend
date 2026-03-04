import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from './media.entity';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private mediaRepo: Repository<Media>,
  ) {}

  create(data: Partial<Media>) {
    const media = this.mediaRepo.create(data);
    return this.mediaRepo.save(media);
  }

  findAll() {
    return this.mediaRepo.find();
  }

  findOne(id: string) {
    return this.mediaRepo.findOne({ where: { id } });
  }

  async update(id: string, data: Partial<Media>) {
    await this.mediaRepo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.mediaRepo.delete(id);
    return { message: 'Deleted' };
  }
}